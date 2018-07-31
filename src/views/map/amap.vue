<template>
  <div class="wrapper">
    <div id="container" class="mymap"></div>
  </div>
</template>
<style lang="scss">
    .mymap{
        width:800px;
        height: 800px;
        margin: 0px auto;
        font:12px Arial;
    }
    .taiwan{
        border: solid 1px red;
        color: red;
        float: left;
        width: 50px;
        background-color: rgba(255,0,0,0.1)
    }
</style>

<script>
    import AMap from 'AMap';
    import provinces from '../../utils/marker';
    export default {
        data () {
            return {
                
            };
        },
        methods: {
            loadmap(){
                const map = new AMap.Map('container', {
                    zoom: 4,
                    resizeEnable : true
                });
                var markers = []; //province见Demo引用的JS文件
                for (var i = 0; i < provinces.length; i += 1) {
                    var marker;
                    if (provinces[i].type === 0) {
                        var icon = new AMap.Icon({
                            image: 'https://vdata.amap.com/icons/b18/1/2.png',
                            size: new AMap.Size(24, 24)
                        });
                        marker = new AMap.Marker({
                            icon: icon,
                            position: provinces[i].center.split(','),
                            offset: new AMap.Pixel(-12,-12),
                            zIndex: 101,
                            title: provinces[i].name,
                            map: map
                        });
                    } else {
                        marker = new AMap.Marker({
                            position: provinces[i].center.split(','),
                            title: provinces[i].name,
                            map: map
                        });
                        if (provinces[i].type === 2) {
                            var content= "<div class = 'taiwan'>宝岛台湾</div>";
                            var baodao = new AMap.Marker({
                                content: content,
                                position: provinces[i].center.split(','),
                                title: provinces[i].name,
                                offset: new AMap.Pixel(0,0),
                                map: map
                            });
                        }
                    }
                    markers.push(marker);
                }
                map.setFitView();
            }
        },
        mounted(){
            this.loadmap();     //加载地图和相关组件
            function Fish(name, color){
                this.name=name;
                this.color=color;
                this.livesIn = "ocean";
                this.price = 100;
            }
            Fish.prototype.livesIn="water";
            Fish.prototype.price=20;

            var fish1=new Fish("mackarel", "gray");
            var fish2=new Fish("goldfish", "orange");
            var fish3=new Fish("salmon", "white");
            var list = [fish1,fish2,fish3];
            for (var i=1; i <= 3; i++){
                var fish = list[i];
                //alert(fish.name+","+fish.color+","+fish.livesIn+","+fish.price);
                console.log(fish);
            }
        },
    };
</script>
