var airasoul = {
    initialise: function (socket) {
        this.reset();
        $('#home').show();
    },
    reset: function () {
        $('#home').hide();
        $('#about').hide();
        $('#services').hide();
    },
    show_loading: function () {
        $('#loading').show();
    },
    hide_loading: function () {
        $('#loading').hide();
    },
    show_content: function (content) {
        $("#content_container").html(content);
        $("#content_container").show();
    },
    hide_content: function () {
        $("#content_container").html('');
        $("#content_container").hide();
    },
    illuminate: function (me) {
        $(me).addClass("opacity");
    },
    un_illuminate: function (me) {
        $(me).removeClass("opacity");
    },
    toggle: function (me){
      this.reset();
      $('#'+me).show();
    }
};