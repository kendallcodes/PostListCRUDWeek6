

document.getElementById('see-all-posts').addEventListener('click', seeAllPosts);

var $posts  = $('#post-list');

//GET 

function seeAllPosts(){ 

    var $posts  = $('#post-list');
   

    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        success: function(posts) { 
           $.each(posts, function(i, post) {
            $posts.append('<li>userID: '+ post.userId+', id: ' + post.id + ' title: ' +post.title+ ' body: ' + post.body+' </li>') 
           });

        }, 
        error: function() { 
            alert('error loading posts');
        }
    });

}


let $userID = $('#user-id');
let $title = $('#post-title'); 

//POST 

$('#add-new-post').on('click', function() {

    var post = { 

        userId: $userID.val(),
        title: $title.val()
       
    };

    $.ajax({
        type: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: post,
        success: function(newPost) { 
            $posts.prepend('<li>userID: '+ newPost.userId + ' id:' +newPost.id+ ' title: ' + newPost.title + ' <button class="edit">Edit</button> <button data-id="{{id}}" class="remove">Remove</button></li>');        
        },
        error: function() { 
            alert('error adding post');
        }
    })

})

//PUT

$('#post-list').on('click', '.edit', function() {


  
  $.ajax({
      type: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/posts' + id,
      data: JSON.stringify({newTitle: newTitle}),
      success: function(response) { 
        console.log(response);
    
      }

  });


//DELETE 

$('.remove').on('click', function(){ 

    $.ajax({
        type: 'DELETE', 
        url: 'https://jsonplaceholder.typicode.com/posts/' + $(this).attr('data-id'),

    });
})

})






