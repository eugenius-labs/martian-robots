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