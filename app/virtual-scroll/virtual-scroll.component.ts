import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TreeNode, topologyCustomBaseNode, expand } from '../data/treeData';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css'],
})
export class VirtualScrollComponent {
  coreBaseNode$ = this.reset();

  expand(clickedNode: TreeNode) {
    // Get concerned node
    const computedNodeList = expand(clickedNode);
    console.log(computedNodeList);
    this.coreBaseNode$ = Observable.create((observer) => {
      const parent = [computedNodeList];
      const children = computedNodeList.children;
      const final = parent.concat(children);
      observer.next(final);
      observer.complete();
    });
  }

  reset() {
    return Observable.create((observer) => {
      observer.next(topologyCustomBaseNode);
      observer.complete();
    });
  }
}
