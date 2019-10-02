import RobotCommander from './RobotCommander';
class RobotCommanderR extends RobotCommander{

    Command(){
        //console.log("Turning right");
        let currentOrientation = this.robot.Orientation;
        switch (currentOrientation){
            case "N":
                this.robot.Orientation = "E";
                break;
            case "S":
                this.robot.Orientation = "W";
                break;
            case "E":
                this.robot.Orientation = "S";
                break;
            case "W":
                this.robot.Orientation = "N";
                break;
            default:
                break;
        }
    }

}

export default RobotCommanderR;