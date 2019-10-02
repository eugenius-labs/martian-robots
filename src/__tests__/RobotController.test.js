import Planet from '../components/PlanetLogic/Planet';
import RobotController from '../components/PlanetLogic/RobotController';

describe('RobotController', () => {
    
    it('Locates robots correctly', () => {
        const command = `1 1 E
RFRFRFRF

3 2 N
FRRFLLFFRRFLL

0 3 W
LLFFFLFLFL`;
        const planet = new Planet(5,3);
        const robotController = new RobotController(planet);
        const expectedOutput = `1 1 E
3 3 N LOST
2 3 S`;

        robotController.releaseRobots(command);
        const locations = robotController.locateRobots();
        expect(locations).toEqual(expectedOutput);
    });
    it('Does not process invalid commands (not enough lines)', () => {

        const planet = new Planet(5,3);
        const robotController = new RobotController(planet);

        robotController.releaseRobots("DSAFASFSAS");
        const locations = robotController.locateRobots();
        expect(locations).toEqual("INVALID COMMAND");
    });
    it('Does not process invalid commands (invalid starting coord)', () => {

        const planet = new Planet(5,3);
        const robotController = new RobotController(planet);
        const invalidCommand = `1 X E
RFRFRFRF`;
        robotController.releaseRobots(invalidCommand);
        const locations = robotController.locateRobots();
        expect(locations).toEqual("INVALID COMMAND");
    });
    
});