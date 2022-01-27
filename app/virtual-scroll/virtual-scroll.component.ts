import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TreeNode, topologyCustomBaseNode, expand } from '../data/treeData';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollComponent {
  coreBaseNode$ = new BehaviorSubject<Array<TreeNode>>(topologyCustomBaseNode);

  
  expand(clickedNode: TreeNode) {
    // Get concerned node
    const computedNodeList = expand(clickedNode, this.coreBaseNode$.getValue());
    console.log(computedNodeList);
    this.coreBaseNode$.next(computedNodeList);
  }
  reset() {
    this.coreBaseNode$.complete();
    this.coreBaseNode$ = new BehaviorSubject<Array<TreeNode>>(
      topologyCustomBaseNode
    );
  }
}
