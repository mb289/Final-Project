var the = {
    'win': $(window),
    'doc': $(document)
};

the.Chat = (function($) {

    var module = function(opts) {
        this.elements = {};
        this.objects = {};
        this.options = {
            selector: '.js-chat'
        };

        this.options = $.extend(this.options, opts);

        this.elements.root = $(this.options.selector);

        if (!this.elements.root.length) return [];

        this.render();
    };

    module.prototype = {
        constructor: module,

        render: function() {
            this.elements.form = $('.js-chat-form', this.elements.root);
            this.elements.name = $('.js-chat-name', this.elements.form);
            this.elements.message = $('.js-chat-message', this.elements.form);
            this.elements.clear = $('.js-chat-clear', this.elements.root);
            this.elements.port = $('.js-chat-port', this.elements.root);

            this.objects.messageTPL = $('#chat-message').html();

            this.elements.name.focus();

            this.objects.firebase = new Firebase('https://'+ this.options.firebaseId +'.firebaseio.com/');
            this.objects.firebaseMessages = this.objects.firebase.child('messages');

            this.bind();
        },

        bind: function() {
            this.elements.form.on('submit', $.proxy(this.submitForm, this));
            this.elements.clear.on('click', $.proxy(this.clearChat, this));

            this.objects.firebaseMessages.on('child_added', $.proxy(this.addMessage, this));
            this.objects.firebaseMessages.on('child_removed', $.proxy(this.removeMessage, this));
        },

        submitForm: function() {
            this.objects.firebaseMessages.push({
                'message': this.elements.message.val(),
                'author': this.elements.name.val()
            });

            this.elements.message.val('');

            return false;
        },

        clearChat: function() {
            this.objects.firebaseMessages.set({});
            return false;
        },

        addMessage: function(snapshot) {
            var _recId = snapshot.name();
            var _recVal = snapshot.val();

            var _message = this.objects.messageTPL
                .replace(/\{\{ id \}\}/gi, _recId)
                .replace(/\{\{ message \}\}/gi, _recVal.message)
                .replace(/\{\{ author \}\}/gi, _recVal.author);

            this.elements.port.prepend(_message);
        },

        removeMessage: function(snapshot) {
            var _recId = snapshot.name();
            var $relBQ = this.elements.port.find('BLOCKQUOTE').filter(function() {
                return $(this).data('id') == _recId;
            });

            if ($relBQ.length) {
                $relBQ.remove();
            }
        }
    };

    return module;
})(jQuery);

$(function() {
    var chat = new the.Chat({
        'firebaseId': 'shining-torch-3669'
    });
});