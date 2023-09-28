function Tempo (request, response){
    dynamicDate = new Date();

    response.json({
        date: dynamicDate.toGMTString()
    })

}
    export default Tempo; 