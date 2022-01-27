import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TreeNode, topologyCustomBaseNode, expand } from '../data/treeData';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css'],
})
export class VirtualScrollComponent {
  public coreBaseNode$ = new BehaviorSubject<Array<TreeNode>>(
    topologyCustomBaseNode
  );

  expand(clickedNode: TreeNode, allNodes: Array<TreeNode>) {
    // Get concerned node
    const computedNodeList = expand(clickedNode, allNodes);
    console.log(computedNodeList);
    this.coreBaseNode$.next(computedNodeList);
  }
  reset() {
    this.coreBaseNode$ = new BehaviorSubject<Array<TreeNode>>(
      topologyCustomBaseNode
    );
  }
}
