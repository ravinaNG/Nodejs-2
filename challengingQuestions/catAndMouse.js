function catAndMouse(x, y, z) {
    function CatA(x,z){
        if(x > z){
            var A = x-z ; 
            return A;
        }
        else if(x<z){
            var A = z-x;
            return A;
        }
        else if(x===z){
            var A = 0;
            return A;
        }
    }
    function CatB(y,z){
        if(y>z){
            var B = y-z;
            return B;
        }
        else if(y<z){
            var B = z-y;
            return B;
        }
        else if(y===z){
            var B = 0;
            return B;
        }
    }
    var A = CatA(x,z);
    var B = CatB(y,z);
    if(A>B){
        console.log("Cat B");
    }
    else if(A<B){
        console.log("Cat A");
    }
    else if(A===B){
        console.log("Mouse C");
    }

}
catAndMouse(1,2,3);