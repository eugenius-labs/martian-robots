import Robot from './Robot';
import RobotCommanderF from './RobotCommanderF';
import RobotCommanderL from './RobotCommanderL';
import RobotCommanderR from './RobotCommanderR';

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
        if (!this.liveRobot.Lost){
            
            if (command === "F"){ 
                let robotCommmander = new RobotCommanderF(this.liveRobot,this.planet);
                robotCommmander.Command();
            }
            else if (command === "L"){
                let robotCommander = new RobotCommanderL(this.liveRobot,this.planet);
                robotCommander.Command();
            }
            else if (command === "R"){
                let robotCommander = new RobotCommanderR(this.liveRobot,this.planet);
                robotCommander.Command();
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