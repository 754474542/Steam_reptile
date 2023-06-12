$(function () {

    axios({
        url:'https://setu.yuban10703.xyz/setu',
        method:'get',
        params:{
            r18:0,
            num:1,
            replace_url:'https://pixiv.yuki.sh'
        }
    }).then(function (res){
        console.log(res)
    })




})




