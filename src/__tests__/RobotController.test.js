import Planet from '../components/NonRendered/Planet';
import RobotController from '../components/NonRendered/RobotController';

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
    
});