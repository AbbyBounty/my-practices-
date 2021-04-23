function getData(){
    let xhr=new XMLHttpRequest();

    xhr.open('GET','https://jsonplaceholder.typicode.com/users',true)
    xhr.send()
    xhr.onreadystatechange=function(){
        if(this.xhr===200 && this.readyState===4){
            let data=JSON.parse(this.responseText)
            let rows="<tr><td>Id</td><td>Name</td></tr>"

            data.forEach(function(d){
                rows+=
                `
                <tr>
                <td>${d.id}</td>
                <td>${d.name}</td>
                </tr>
                `;
            });
            document.querySelector('#table').innerHTML=rows
            console.table(data)
          console.log(this.responseText)
        }
    };
}

function sendData(){
    let xhr=new XMLHttpRequest();
    xhr.open('POST','https://jsonplaceholder.typicode.com/comments',true)
    let mycomment={
        postId:123,
        id:4555,
        body:'this is body'
    }
    mycomment=JSON.stringify(mycomment)
    xhr.send(mycomment)

    xhr.onreadystatechange=function(){
        if(this.readyState==4 && this.status===201){
            console.log(this.responseText)
        }
    
    }
}


sendData();
getData();