import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TreeNode, topologyCustomBaseNode, expand } from '../data/treeData';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css'],
})
export class VirtualScrollComponent {
  coreBaseNode$ = this.load();

  expand(clickedNode: TreeNode) {
    // Get concerned node
    const oldParent = clickedNode;
    const computedNodeList = expand(clickedNode);
    console.log(computedNodeList);
    this.coreBaseNode$ = Observable.create((observer) => {
      const grandFather =
        oldParent.id !== computedNodeList.id ? oldParent : null;
      const parents = grandFather
        ? [grandFather, computedNodeList]
        : [computedNodeList];
      const children = computedNodeList.children;
      const final = parents.concat(children);
      observer.next(final);
      observer.complete();
    });
  }

  load() {
    return Observable.create((observer) => {
      observer.next(topologyCustomBaseNode);
      observer.complete();
    });
  }

  reset() {
    this.coreBaseNode$ = this.load();
  }
}
