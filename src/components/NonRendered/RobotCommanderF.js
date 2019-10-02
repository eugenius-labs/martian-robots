import RobotCommander from './RobotCommander';
import Scent from './Scent';
class RobotCommanderF extends RobotCommander{

    Command(){
        //console.log("Moving forward");
        let currentOrientation = this.robot.Orientation;
        switch (currentOrientation){
            case "N":
                if (this.planet.Height >= (this.robot.PosY + 1)){
                    this.robot.PosY++;

                }
                else{
                    if (!this.planet.hasScentAt(this.robot.PosX,this.robot.PosY)){
                        this.robot.Lost = true;
                    }
                }
                break;
            case "S":
                if (this.robot.PosY > 0){
                    this.robot.PosY--;
                }
                else{
                    if (!this.planet.hasScentAt(this.robot.PosX,this.robot.PosY)){
                        this.robot.Lost = true;
                    }
                }
                break;
            case "E":
                if (this.planet.Width >= (this.robot.PosX + 1)){
                    this.robot.PosX++;
                }
                else{
                    if (!this.planet.hasScentAt(this.robot.PosX,this.robot.PosY)){
                        this.robot.Lost = true;
                    }
                }
                break;
            case "W":
                if (this.robot.PosX > 0){
                    this.robot.PosX--;
                }
                else{
                    if (!this.planet.hasScentAt(this.robot.PosX,this.robot.PosY)){
                        this.robot.Lost = true;
                    }
                }
                break;
            default:
                break;
        }
        if (this.robot.Lost){ 
            // Add scent
            this.planet.addScent(new Scent(this.robot.PosX,this.robot.PosY));
        }
    }

}

export default RobotCommanderF;