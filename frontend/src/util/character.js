var context, controller, rabbit, loop;

context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 180;
context.canvas.width = 320;

rabbit = {
    height: 32,
    jumping: true, // if it's in the air, jump is true, and you won't be able to jump again 
    width: 32,
    x: 14, // center of the canvas
    x_velocity: 0, // Speed movement 
    y: -60,
    y_velocity: 0
};

assets = {
    height: 20,
    moving: true, // Moving : false when game over 
    width: 20,
    x: 300, // Where do you place....
    x_velocity: 0, // Speed movement 
    y: 0,
    y_velocity: 0
}

controller = {
    right: false,
    up: false,
    shift: false,

    keyListener: function (event) {
        var key_state = (event.type == "keydown") ? true : false;

        switch (event.keyCode) {

            case 32:// up key
                controller.up = key_state;
                break;
            case 39:// right key
                controller.right = key_state;
                break;
            case 16: // shift key
                controller.shift = key_state;
        }

    }
};

loop = function () {
    // JUMP FUNCTION 
    if (controller.up && rabbit.jumping == false) {
        rabbit.y_velocity -= 20; // -20 To send the object Up 
        rabbit.jumping = true;   // So the object cant jump again 
    }

    // MOVING RIGHT FUNCTION 
    if (controller.right || !controller.right) {
        rabbit.x_velocity += 0.05;        // += is for smoother graphics than a set constant, MIGHT HAVE A CONSTANT X VELOCITY TO PREVENT INCREASE OF SPEED
    }

    // Y-axis decay, Updating X & Y Current Position in terms of
    rabbit.y_velocity += 1.5;            // gravity, adds 1.5 per every frame of animation, w/o this the Object will never fall
    rabbit.x += rabbit.x_velocity;    // Adds x velocity to current POS
    rabbit.y += rabbit.y_velocity;    // Adds y velocity to current POS
    rabbit.y_velocity *= 0.9;            // friction,  gives effect of slowing down, allows friction on Y axis 
    rabbit.x_velocity *= 0.9;            // friction, gradually reduces velocity, slowly reduces to 0, giving the effect of slowing down 
    //  CHANGE CONSTANT ON X_VELOCITY TO HAVE A RETURN A SPEED CLOSE TO BASE SPEED


    if (controller.shift) {
        rabbit.x_velocity = 2;
        rabbit.shift = true;
    }

    if (rabbit.x_velocity > 1) {
        rabbit.x_velocity *= 0.8;
    }


    // Collision detection, in regards to falling onto the "floor" and landing
    if (rabbit.y > 180 - 16 - 32) {      // 180 being the very bottom of your screen
        rabbit.jumping = false;          // -60 being the location of the rendered floor, this number is subject to change in terms of Object floor
        rabbit.y = 180 - 16 - 32;        // -32 being the top coordinate of the Object, this number is subject to change in terms of the Object 
        rabbit.y_velocity = 0;
    }                                       // Set Jumping to False, to allow jump again, Y coordinate to equal position to update current POS, y_velocity to 0 because youre hitting floor



    // background styling
    context.fillStyle = "#202020";

    // rabbit styling 
    context.fillRect(0, 0, 320, 180);// x, y, width, height
    context.fillStyle = "#ff0000";// hex for red
    context.beginPath();
    context.rect(rabbit.x, rabbit.y, rabbit.width, rabbit.height);
    context.fill();

    // trap styling 
    // context.fillRect(0, 0, 320, 180);// x, y, width, height
    // context.fillStyle = "#fff";// hex for red
    // context.beginPath();
    // context.rect(assets.x, assets.y, assets.width, assets.height);
    // context.fill();


    // "Ground" styling
    context.strokeStyle = "#202830";
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(0, 164);
    context.lineTo(320, 164);
    context.stroke();

    // call update when the browser is ready to draw again
    window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);

