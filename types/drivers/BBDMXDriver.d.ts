/// <reference types="node" resolution-mode="require"/>
export class BBDMXDriver extends AbstractDriver {
    constructor(options?: {});
    host: any;
    port: any;
    serial: dgram.Socket;
    ready: boolean;
}
import { AbstractDriver } from './index.js';
import * as dgram from 'node:dgram';
