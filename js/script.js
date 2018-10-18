$(Document).ready(function(){



    $("#btn").click(function(e){
        e.preventDefault();
        $("#form").val(); //val("gato") acrescenta "gato" no elemento. Se estiver vazio, traz o valor do elemento//
        insereTweet();
    });
    
    function insereTweet (){
        let date = new Date;
        $(".tuites").prepend(`
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
            <div class="card-header">${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}-${date.getHours()}:${date.getMinutes()}</div>
            <div class="card-body">
                <p class="card-text">${$("#form").val()}</p>
            </div>
        </div>  
        `)
    }

    function pegaNumerocaracteres(){
        let charSobrando = 280 - $ ("#form").val().length;
        return $("#contador").text(`Você ainda tem ${charSobrando} caracteres`)

    }

    $("#form").keyup(function(){
        pegaNumerocaracteres()

    });
})

// Com o JS "normal"
// addEventListener('click', function(e){
//     e.preventDefault();
// })