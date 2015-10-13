$(document).ready(function() {
  $('.delete-button').click(function() {
    var that = this;
    $.ajax({
      method: 'DELETE',
      url: '/tweets/' + $(this).attr('data-id')
    }).done(function(resp) {
      console.log(resp);
      console.log(resp.body);
      $(that).remove();
    });
  });
});
