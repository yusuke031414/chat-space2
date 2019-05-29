$(function(){
  function buildHTML(message){
    image = ( message.image ) ? `<asset_path src=${message.image} >` : "";
    var html = `
    <div class='message'>
      <div class ='upper-info'>
        <div class='upper-info__user'>
         ${message.name}
        </div>
        <div class='upper-info__date'>
        ${message.created_at}
        </div>
      </div>
      <div class='lower-meesage'>
          <p class='message__text'>
           ${message.content}
          </p>
      </div>
      ${image}
    </div>`
    return html;
 }

  $('.msg_form').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('.form__message').val('');
      $('.form__submit').prop('disabled', false);
    })
    .fail(function(){
	    alert('error');
	  });
  });
});