let html = document.getElementsByTagName('html')[0]
let body = document.getElementsByTagName('body')[0]
html.setAttribute('style', 'background-image: url(https://images.unsplash.com/photo-1545418743-1f9f98ff0e3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80); background-repeat: no-repeat; background-size: cover; margin: auto; text-align: center;')
body.setAttribute('style', 'width: 500px; text-align: center; margin: auto')
body.innerHTML = "<h1>Something</h1>"