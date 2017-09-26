/**
 * @file Busy Config
 * @author yumao<yuzhang.lille@gmail.com>
 */

import {Subscription} from 'rxjs/Subscription';

export class BusyConfig implements IBusyConfig {
    template: string;
    delay: number;
    minDuration: number;
    backdrop: boolean;
    message: string;
    success: boolean;
    loading: boolean;
    wrapperClass: string;

    constructor(config: IBusyConfig = {}) {
        for (let option in BUSY_CONFIG_DEFAULTS) {
            this[option] = config[option] != null ? config[option] : BUSY_CONFIG_DEFAULTS[option];
        }
    }
}

export interface IBusyConfig {
    template?: string;
    delay?: number;
    minDuration?: number;
    backdrop?: boolean;
    message?: string;
    wrapperClass?: string;
    success?: boolean;
    loading?: boolean;
    busy?: Promise<any> | Subscription | Array<Promise<any> | Subscription>
}

export const BUSY_CONFIG_DEFAULTS = {
    template: `
     <div bsModal #successModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel"
        aria-hidden="true" style="background: rgba(54, 59, 59, 0.50);z-index: 10000;">
        <div class="modal-dialog success-modal modal-sm"> 
           <div class="modal-content">
                <div class="modal-body success-content">
                    <div *ngIf="!loading">
                        <span *ngIf="success" class="glyphicon success-icon">
                             <img src='data:image/svg+xml;utf8,<svg version="1.1" baseProfile="full" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="80px" width="80px" viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;"> <path style="opacity:1;fill:#f58020;stroke-width:1.10494936" class="st3" id="tick" d="m 615.23529,305.18781 c -39.46999,32.71844 -77.0813,63.98518 -117.75397,97.70862 -22.85105,-25.23674 -44.82743,-49.58015 -65.2731,-72.36021 -18.58698,17.64339 -39.1384,35.84004 -52.47729,48.45841 37.72064,39.86511 74.28376,81.43908 113.09775,122.53254 95.4496,-78.8369 198.2401,-160.57207 295.32973,-240.86064 -14.76024,-21.10505 -29.25665,-41.01563 -43.68889,-61.56235 -24.05374,19.54171 -46.13945,37.52011 -68.55315,55.83349 -0.32801,-0.11166 -0.54667,-0.22333 -0.76535,-0.335 l -60.57175,49.91514 c 0.21868,0.22334 0.43734,0.44667 0.65602,0.67 z"/><path style="fill:#f58020;stroke:#f58020;stroke-width:15;stroke-linecap:round;stroke-dasharray:15000;fill-opacity:1;stroke-miterlimit:4;stroke-dashoffset:0" class="circle" id="innercircle" d="m 692.53529,469.48781 c -16.7,-8.5 -34.2,-2.5 -44.6,15.6 -2.7,4.7 -4.9,9.7 -7.6,14.5 -36.8,64.8 -114.9,97 -187.5,77.4 -70.7,-19.1 -121.5,-85.5 -121.5,-158.8 -0.1,-104.2 96,-183.4 198,-162.2 32.8,6.8 61.6,22 85.9,49.2 l 53.89883,-44.2285 c -2.13002,-1.88205 -2.19883,-1.9715 -2.99883,-2.6715 -1.9,-1.5 -3.7,-3.1 -5.5,-4.8 -44.7,-43.1 -97.9,-65.6 -160.3,-66.9 -142.6,-3.1 -258.5,124.9 -231.6,272.3 24.3,133.1 154.4,215.2 285.6,181.7 69.8,-17.8 120.4,-60.7 151.6,-125.8 8.8,-18.3 2.7,-37.1 -13.4,-45.3 z" /></svg>'/>
                         </span>
                          <span *ngIf="!success" class="glyphicon glyphicon-exclamation-sign error-icon"></span>
                    </div>
                     <div *ngIf="loading">
                        <img height="150px" width="150px" src='data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="150px" width="150px" viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;" xml:space="preserve"> <defs id="defs4491"><linearGradient id="linearGradient5675"><stop style="stop-color:#ffffff;stop-opacity:1;" offset="0" id="stop5671" /><stop style="stop-color:#ffffff;stop-opacity:0;" offset="1" id="stop5673" /></linearGradient> <linearGradient xlink:href="#linearGradient5675" id="linearGradient5677" x1="285.57386" y1="413.99491" x2="704.10662" y2="413.99491" gradientUnits="userSpaceOnUse" /></defs> <style type="text/css" id="style4485"> .spin { fill: none; stroke-dasharray: 1000; animation: draw 1s linear infinite; } @keyframes draw { 0%{ stroke-dashoffset: -1000; } 50%{ sroke-dashoffset: 0; } 100%{ stroke-dashoffset: 1000; } } </style><path style="opacity:1;fill:#f58020;stroke-width:1.10494936" class="st3" id="tick" d="m 615.23529,305.18781 c -39.46999,32.71844 -77.0813,63.98518 -117.75397,97.70862 -22.85105,-25.23674 -44.82743,-49.58015 -65.2731,-72.36021 -18.58698,17.64339 -39.1384,35.84004 -52.47729,48.45841 37.72064,39.86511 74.28376,81.43908 113.09775,122.53254 95.4496,-78.8369 198.2401,-160.57207 295.32973,-240.86064 -14.76024,-21.10505 -29.25665,-41.01563 -43.68889,-61.56235 -24.05374,19.54171 -46.13945,37.52011 -68.55315,55.83349 -0.32801,-0.11166 -0.54667,-0.22333 -0.76535,-0.335 l -60.57175,49.91514 c 0.21868,0.22334 0.43734,0.44667 0.65602,0.67 z"/><path style="fill:#f58020;stroke:#f58020;stroke-width:15;stroke-linecap:round;stroke-dasharray:15000;fill-opacity:1;stroke-miterlimit:4;stroke-dashoffset:0" class="circle" id="innercircle" d="m 692.53529,469.48781 c -16.7,-8.5 -34.2,-2.5 -44.6,15.6 -2.7,4.7 -4.9,9.7 -7.6,14.5 -36.8,64.8 -114.9,97 -187.5,77.4 -70.7,-19.1 -121.5,-85.5 -121.5,-158.8 -0.1,-104.2 96,-183.4 198,-162.2 32.8,6.8 61.6,22 85.9,49.2 l 53.89883,-44.2285 c -2.13002,-1.88205 -2.19883,-1.9715 -2.99883,-2.6715 -1.9,-1.5 -3.7,-3.1 -5.5,-4.8 -44.7,-43.1 -97.9,-65.6 -160.3,-66.9 -142.6,-3.1 -258.5,124.9 -231.6,272.3 24.3,133.1 154.4,215.2 285.6,181.7 69.8,-17.8 120.4,-60.7 151.6,-125.8 8.8,-18.3 2.7,-37.1 -13.4,-45.3 z" /><path style="fill:none;stroke:url(#linearGradient5677);stroke-width:30.236;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:999.99268052;stroke-dashoffset:0" class="spin" d="m 644.95798,281.5126 c -28.26903,-31.52905 -66.8834,-53.62632 -108.38844,-62.02582 -41.50503,-8.39951 -85.67285,-3.05513 -123.97667,15.00137 -38.30381,18.0565 -70.53332,48.72598 -90.46648,86.08758 -19.93316,37.3616 -27.46052,81.21017 -21.1289,123.08057 6.33162,41.87039 26.48747,81.53273 56.57636,111.33001 30.08889,29.79729 69.94563,49.56592 111.8757,55.48949 41.93007,5.92357 85.70326,-2.03045 122.86896,-22.32651 37.16571,-20.29605 67.51988,-52.82271 85.2025,-91.30055 6.02249,-13.10508 10.6104,-26.86883 13.65546,-40.96639" id="path5649"/></svg>'/> 
                    </div>
                    <div  class="ng-busy-default-text">
                        {{message}}
                    </div>
                 </div>
            </div>
        </div>
   </div>
    `,
    delay: 0,
    minDuration: 0,
    backdrop: true,
    message: 'Please wait...',
    wrapperClass: 'ng-busy'
};
