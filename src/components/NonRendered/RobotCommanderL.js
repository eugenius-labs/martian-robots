import RobotCommander from './RobotCommander';
class RobotCommanderL extends RobotCommander{

    Command(){
        //console.log("Turning left");
        let currentOrientation = this.robot.Orientation;
        switch (currentOrientation){
            case "N":
                this.robot.Orientation = "W";
                break;
            case "S":
                this.robot.Orientation = "E";
                break;
            case "E":
                this.robot.Orientation = "N";
                break;
            case "W":
                this.robot.Orientation = "S";
                break;
            default:
                break;
        }
    }
}

export default RobotCommanderL;