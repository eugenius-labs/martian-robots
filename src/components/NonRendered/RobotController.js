import Robot from './Robot';

class RobotController {

    constructor(planet){
        this.planet = planet;
        this.X = 0;
        this.Y = 0;
        this.robots = [];
        this.liveRobot = null;
        this.invalidCommand = false;

    }

    releaseRobots(command){
        const robotCommands = command.split('\n\n');
        //console.log("Commands length" + robotCommands.length);
        if (robotCommands.length > 0){
            for (let i=0; i<robotCommands.length; i++){
                // Create a new robot
                let robotCommandParts = robotCommands[i].split('\n');
                if (robotCommandParts.length === 2){
                    let robotInitialCoords = robotCommandParts[0].split(' ');
                    let robotX = parseInt(robotInitialCoords[0]);
                    let robotY = parseInt(robotInitialCoords[1]);
                    let robotOrientation = robotInitialCoords[2];
                    if (robotX > -1 && robotY > -1 && robotOrientation.length > 0){
                        this.liveRobot = new Robot(robotX,robotY,robotOrientation);
                        console.log("Releasing robot at " + this.liveRobot.PosX + ":" + this.liveRobot.PosY + ":" + this.liveRobot.Orientation);
                        let robotInstructions = robotCommandParts[1].split('');
                        for (let j=0; j<robotInstructions.length; j++){
                            this.moveRobot(robotInstructions[j]);
                        }
                        this.robots.push(this.liveRobot);
                    }
                    else{
                        this.invalidCommand = true;
                    }
                        
                }
                else{
                    this.invalidCommand = true;
                }
            }
        }
        else{
            this.invalidCommand = true;
        }
    }

    moveRobot(command){

        if (command === "F"){
            console.log("Moving forward");

            switch (this.liveRobot.Orientation){
                case "N":
                    if (this.planet.Height >= (this.liveRobot.PosY + 1)){
                        this.liveRobot.PosY++;

                    }
                    else{
                        this.liveRobot.Lost = true;
                    }
                    break;
                case "S":
                    if (this.liveRobot.PosY > 0){
                        this.liveRobot.PosY--;
                    }
                    else{
                        this.liveRobot.Lost = true;
                    }
                    break;
                case "E":
                    if (this.planet.Width >= (this.liveRobot.PosX + 1)){
                        this.liveRobot.PosX++;
                    }
                    else{
                        this.liveRobot.Lost = true;
                    }
                    break;
                case "W":
                    if (this.liveRobot.PosX > 0){
                        this.liveRobot.PosX--;
                    }
                    else{
                        this.liveRobot.Lost = true;
                    }
                    break;
                default:
                    break;
            }
        }
        else if (command === "L"){
            console.log("Turning left");
            let currentOrientation = this.liveRobot.Orientation;
            switch (currentOrientation){
                case "N":
                    this.liveRobot.Orientation = "W";
                    break;
                case "S":
                    this.liveRobot.Orientation = "E";
                    break;
                case "E":
                    this.liveRobot.Orientation = "N";
                    break;
                case "W":
                    this.liveRobot.Orientation = "S";
                    break;
                default:
                    break;
            }
        }
        else if (command === "R"){
            console.log("Turning right");
            let currentOrientation = this.liveRobot.Orientation;
            switch (currentOrientation){
                case "N":
                    this.liveRobot.Orientation = "E";
                    break;
                case "S":
                    this.liveRobot.Orientation = "W";
                    break;
                case "E":
                    this.liveRobot.Orientation = "S";
                    break;
                case "W":
                    this.liveRobot.Orientation = "N";
                    break;
                default:
                    break;
            }
        }
        console.log("Command " + command + " New Position" + this.liveRobot.PosX + ":" + this.liveRobot.PosY + ":" + this.liveRobot.Orientation);
    }



    locateRobots(){
        if (this.invalidCommand){
            return "INVALID COMMAND";
        }
        var positions = [];
        for (let i=0; i<this.robots.length; i++){
            let robot = this.robots[i];
            const robotLocation = robot.PosX + " " +  robot.PosY + " " + robot.Orientation + ((robot.Lost)?" LOST": "");
            positions.push(robotLocation);

        }
        return positions.join('\n');
    }

}

export default RobotController;