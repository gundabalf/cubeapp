import { Cubelet } from './Cubelet';
import { Face } from './Face';
import { FaceColor } from './FaceColor';

import * as THREE from 'three';

export class Cube {
    public faces: Array<Face>;

    public root: THREE.Group;

    private cubelets: Array<Cubelet>;

    constructor() {
        this.root = new THREE.Group();

        this.faces = new Array<Face>();

        this.cubelets = this.createAllCubelets();

        this.faces.push(new Face(this.getFace1Cubelets()));
        this.faces.push(new Face(this.getFace2Cubelets()));
        this.faces.push(new Face(this.getFace3Cubelets()));

        for (var c of this.cubelets) {
            this.root.add(c.mesh);
        }

    }

    private getFace1Cubelets(): Array<Cubelet> {

        var faceCubelets = new Array<Cubelet>();

        faceCubelets.push(this.cubelets[0]);
        faceCubelets.push(this.cubelets[1]);
        faceCubelets.push(this.cubelets[2]);
        faceCubelets.push(this.cubelets[3]);
        faceCubelets.push(this.cubelets[4]);
        faceCubelets.push(this.cubelets[5]);
        faceCubelets.push(this.cubelets[6]);
        faceCubelets.push(this.cubelets[7]);
        faceCubelets.push(this.cubelets[8]);

        return faceCubelets;
    }

    private getFace2Cubelets(): Array<Cubelet> {

        var faceCubelets = new Array<Cubelet>();

        faceCubelets.push(this.cubelets[9]);
        faceCubelets.push(this.cubelets[5]);
        faceCubelets.push(this.cubelets[1]);
        faceCubelets.push(this.cubelets[8]);
        faceCubelets.push(this.cubelets[10]);
        faceCubelets.push(this.cubelets[11]);
        faceCubelets.push(this.cubelets[12]);
        faceCubelets.push(this.cubelets[13]);
        faceCubelets.push(this.cubelets[14]);

        return faceCubelets;
    }

    private getFace3Cubelets(): Array<Cubelet> {

        var faceCubelets = new Array<Cubelet>();

        faceCubelets.push(this.cubelets[6]);
        faceCubelets.push(this.cubelets[3]);
        faceCubelets.push(this.cubelets[5]);
        faceCubelets.push(this.cubelets[11]);
        faceCubelets.push(this.cubelets[12]);
        faceCubelets.push(this.cubelets[15]);
        faceCubelets.push(this.cubelets[16]);
        faceCubelets.push(this.cubelets[17]);
        faceCubelets.push(this.cubelets[18]);

        return faceCubelets;
    }


    private createAllCubelets(): Array<Cubelet> {

        var cubelets = new Array<Cubelet>();

        var c = new Cubelet(FaceColor.WHITE);
        c.mesh.position.x = 0;
        c.mesh.position.y = 1;
        c.mesh.position.z = 0;
        cubelets[0] = c;

        c = new Cubelet(FaceColor.WHITE, FaceColor.GREEN);
        c.mesh.position.x = 0;
        c.mesh.position.y = 1;
        c.mesh.position.z = 1;
        cubelets[1] = c;

        c = new Cubelet(FaceColor.WHITE, FaceColor.BLUE);
        c.mesh.position.x = 0;
        c.mesh.position.y = 1;
        c.mesh.position.z = -1;
        c.mesh.rotation.y = Math.PI;
        cubelets[2] = c;

        c = new Cubelet(FaceColor.WHITE, FaceColor.ORANGE);
        c.mesh.position.x = -1;
        c.mesh.position.y = 1;
        c.mesh.position.z = 0;
        c.mesh.rotation.y = -Math.PI / 2;
        cubelets[3] = c;

        c = new Cubelet(FaceColor.WHITE, FaceColor.RED);
        c.mesh.position.x = 1;
        c.mesh.position.y = 1;
        c.mesh.position.z = 0;
        c.mesh.rotation.y = Math.PI / 2;
        cubelets[4] = c;

        c = new Cubelet(FaceColor.WHITE, FaceColor.GREEN, FaceColor.BLACK, FaceColor.BLACK, FaceColor.ORANGE);
        c.mesh.position.x = -1;
        c.mesh.position.y = 1;
        c.mesh.position.z = 1;
        c.mesh.rotation.y = 0;
        cubelets[5] = c;

        c = new Cubelet(FaceColor.WHITE, FaceColor.ORANGE, FaceColor.BLACK, FaceColor.BLACK, FaceColor.BLUE);
        c.mesh.position.x = -1;
        c.mesh.position.y = 1;
        c.mesh.position.z = -1;
        c.mesh.rotation.y = -Math.PI / 2;
        cubelets[6] = c;

        c = new Cubelet(FaceColor.WHITE, FaceColor.BLUE, FaceColor.BLACK, FaceColor.BLACK, FaceColor.RED);
        c.mesh.position.x = 1;
        c.mesh.position.y = 1;
        c.mesh.position.z = -1;
        c.mesh.rotation.y = Math.PI;
        cubelets[7] = c;

        c = new Cubelet(FaceColor.WHITE, FaceColor.RED, FaceColor.BLACK, FaceColor.BLACK, FaceColor.GREEN);
        c.mesh.position.x = 1;
        c.mesh.position.y = 1;
        c.mesh.position.z = 1;
        c.mesh.rotation.y = Math.PI / 2;
        cubelets[8] = c;

        c = new Cubelet(FaceColor.GREEN);
        c.mesh.position.x = 0;
        c.mesh.position.y = 0;
        c.mesh.position.z = 1;
        c.mesh.rotation.x = Math.PI / 2;
        cubelets[9] = c;

        c = new Cubelet(FaceColor.RED, FaceColor.GREEN);
        c.mesh.position.x = 1;
        c.mesh.position.y = 0;
        c.mesh.position.z = 1;
        c.mesh.rotation.z = -Math.PI / 2;
        cubelets[10] = c;

        c = new Cubelet(FaceColor.ORANGE, FaceColor.GREEN);
        c.mesh.position.x = -1;
        c.mesh.position.y = 0;
        c.mesh.position.z = 1;
        c.mesh.rotation.z = Math.PI / 2;
        cubelets[11] = c;

        c = new Cubelet(FaceColor.GREEN, FaceColor.YELLOW, FaceColor.BLACK, FaceColor.BLACK, FaceColor.ORANGE);
        c.mesh.position.x = -1;
        c.mesh.position.y = -1;
        c.mesh.position.z = 1;
        c.mesh.rotation.x = Math.PI / 2;
        cubelets[12] = c;

        c = new Cubelet(FaceColor.GREEN, FaceColor.RED, FaceColor.BLACK, FaceColor.BLACK, FaceColor.YELLOW);
        c.mesh.position.x = 1;
        c.mesh.position.y = -1;
        c.mesh.position.z = 1;
        c.mesh.rotation.y = Math.PI / 2;
        c.mesh.rotation.x = Math.PI / 2;
        cubelets[13] = c;

        c = new Cubelet(FaceColor.GREEN, FaceColor.YELLOW);
        c.mesh.position.x = 0;
        c.mesh.position.y = -1;
        c.mesh.position.z = 1;
        c.mesh.rotation.x = Math.PI / 2;
        cubelets[14] = c;

        c = new Cubelet(FaceColor.ORANGE);
        c.mesh.position.x = -1;
        c.mesh.position.y = 0;
        c.mesh.position.z = 0;
        c.mesh.rotation.z = Math.PI / 2;
        cubelets[15] = c;

        c = new Cubelet(FaceColor.BLUE, FaceColor.ORANGE);
        c.mesh.position.x = -1;
        c.mesh.position.y = 0;
        c.mesh.position.z = -1;
        c.mesh.rotation.z = Math.PI / 2;
        c.mesh.rotation.y = -Math.PI / 2;
        cubelets[16] = c;

        c = new Cubelet(FaceColor.ORANGE, FaceColor.YELLOW);
        c.mesh.position.x = -1;
        c.mesh.position.y = -1;
        c.mesh.position.z = 0;
        c.mesh.rotation.z = Math.PI / 2;
        c.mesh.rotation.x = Math.PI / 2;
        cubelets[17] = c;

        c = new Cubelet(FaceColor.ORANGE, FaceColor.YELLOW, FaceColor.BLACK, FaceColor.BLACK, FaceColor.BLUE);
        c.mesh.position.x = -1;
        c.mesh.position.y = -1;
        c.mesh.position.z = -1;
        c.mesh.rotation.x = Math.PI / 2;
        c.mesh.rotation.z = Math.PI / 2;
        cubelets[18] = c;

        for (var cu of cubelets) {
            cu.mesh.scale.x = 0.95;
            cu.mesh.scale.y = 0.95;
            cu.mesh.scale.z = 0.95;

            cu.mesh.updateMatrix();
            cu.mesh.geometry.applyMatrix(cu.mesh.matrix);
            cu.mesh.position.set(0, 0, 0);
            cu.mesh.rotation.set(0, 0, 0);
            // cu.mesh.scale.set(1, 1, 1);
            cu.mesh.updateMatrix();
        }

        return cubelets;
    }
}