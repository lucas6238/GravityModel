function Bubble(x, y, mass) {



    this.position = createVector(x, y);
    this.velocity = createVector(random(-3,3),random(-3,3));
    
    
    this.accel = createVector(0, 0);
    this.angle = 0;
    this.highest = 0;
    this.lowest = 0;
    this.force = createVector();
    this.totalForce = createVector();
    this.mass = mass;
    this.gravityConstant = 1.5;

    this.size = mass * 5;

    var r = 0;
    var g = 255;
    var b = 0;

    this.col = color(255, 255, 255);
  
       

      




    

    this.updateColor = function () {
        //if the object is moving fast i want it to be red
        //if it is moving slow i want it to be blue
        var highpoint = this.highest;
        var lowpoint = this.lowest;
        var totalmove = abs(this.force.x) + abs(this.force.y);
        r = map(totalmove, lowpoint, highpoint, 0, 255);
        b = map(totalmove, lowpoint, highpoint, 255, 0);
        if (totalmove > highpoint) {
            this.highest = totalmove;
        }
        if (totalmove < lowpoint) {
            this.lowpoint = totalmove;
        }

//    



        this.col = color(r, 0, b);
    }

    this.update = function () {
        this.accel.add(this.force);
//   console.log("forceY " + this.force.y);
//   console.log("accel Y" + this.accel.y);
//   console.log("velocity Y" + this.velocity.y);
//   console.log("position Y" + this.position.y);



        this.velocity.add(this.accel);
        this.position.add(this.velocity);
        this.updateColor();
        //this.force.mult(0);
        this.accel.mult(0);
        this.force.mult(0);
        if (this.leaves()) {

        }

        //console.log("desiredX" + round(this.force.x) + " desiredY" + round(this.force.y));
    }
    }





Bubble.prototype.render = function () {
    // noStroke();
    fill(this.col);


    ellipse(this.position.x, this.position.y, this.size, this.size);

}

Bubble.prototype.edges = function () {
    if (this.position.x + this.radius < 0) {
        this.position.x = width + this.radius;
    }

    if (this.position.x - this.radius > width) {
        this.position.x = 0 - this.radius;
    }
    if (this.position.y + this.radius < 0) {
        this.position.y = height + this.radius;
    }

    if (this.position.y - this.radius > height) {
        this.position.y = 0 - this.radius;
    }
}

Bubble.prototype.attract = function (other) {
//calculate the force that should be applied to the ball

    bDist = dist(this.position.x, this.position.y, other.position.x, other.position.y);
    var desiredX = 0;
    var desiredY = 0;
//  var strength = map(bDist,0,,.005,.0001);
    //console.log("bdist"+bDist);
    //console.log(" strength "+strength);
//  strength*=other.mass;
    if (this.position.x > other.position.x) {
        desiredX = other.position.x - this.position.x;
    } else {
        desiredX = other.position.x - this.position.x;
    }

    if (this.position.y > other.position.y) {
        desiredY = other.position.y - this.position.y;
    } else {
        desiredY = other.position.y - this.position.y;
    }

    var gforce =  this.gravityConstant * ((other.mass * this.mass) / (bDist * bDist));

    var forceVector = createVector(desiredX, desiredY);
    forceVector.mult(gforce);
    this.force.add(forceVector);


    // this.force.mult(this.strength);
    //console.log("force.y " + this.force.y +"      desiredy " +desiredY);




    //now i need to give each object a mass and use mass to calculate
    //the strength of the force that should be applied to the other object
    //the force is a vector that is added to acceleration
    //i need a vector that is pointed  to the attractor 
    //then i need to strengthen it or shorten it based on the p

    //apply a force that 
    // console.log("x " + round(cVecX) + " y " + round(cVecY));
    //this.accel.sub(10);
    //the distance between the two objects there is a ratio between how stong they are together
    //apply a force to both objects that sends them tward each other
    //
    //get the two distances
    //calculate attaction force
    //attractive force based on distance

    //create a vector that points the two of them togther
}
Bubble.prototype.intersects = function (other) {

    if (dist(this.position.x, this.position.y, other.position.x, other.position.y) < this.radius + other.radius) {
        return true;
    } else {
        return false;
    }
}

Bubble.prototype.turnAround = function () {
    this.velocity.mult(-1);
}
Bubble.prototype.leaves = function () {
    if (this.position.x + this.radius < 0) {
        return true;
    }

    if (this.position.x - this.radius > width) {

        return true;
    }
    if (this.position.y + this.radius < 0) {

        return true
    }

    if (this.position.y - this.radius > height) {

        return  true;
    }
    return false;
}