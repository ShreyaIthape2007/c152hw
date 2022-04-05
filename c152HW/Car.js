AFRAME.registerComponent("move-car", {
    schema:{
        moveX:{type:"number",default:1}
    },
    tick:function(){
        this.data.moveX = this.data.moveX + 0.01;
        var pos = this.el.getAttribute("position");
        pos.x = this.data.moveX;
        this.el.setAttribute("position",{x:pos.x, y:pos.y, z:pos.z})
    }
})

AFRAME.registerComponent("rotate-car",{
    schema:{
        clickCounter: { type: "number", default: 0 }
    },

    update:function(){
        window.addEventListener("click",(e)=>{
            this.data.clickCounter+=1;

            if (this.data.clickCounter === 1) {
                const rotation = { x: 0, y: 180, z: 0 };
                this.el.setAttribute("rotation", rotation);
              } else if (this.data.clickCounter === 2) {
                const rotation = { x: 0, y: -90, z: 0 };
                this.el.setAttribute("rotation", rotation);
              } else if (this.data.clickCounter === 3) {
                const rotation = { x: 0, y: 0, z: 0 };
                this.el.setAttribute("rotation", rotation);
              } else if (this.data.clickCounter === 4) {
                const rotation = { x: 0, y: 90, z: 0 };
                this.el.setAttribute("rotation", rotation);
              }
              else{
                const rotation = { x: 0, y: 90, z: 0 };
                this.el.setAttribute("rotation", rotation);
                this.data.clickCounter = 0;
              }
        })
    }
})