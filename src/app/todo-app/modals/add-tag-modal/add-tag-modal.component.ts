import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tag } from '../../interfaces/tag.insterface';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-add-tag-modal',
  templateUrl: './add-tag-modal.component.html',
  styles:[ ]
})
export class AddTagModalComponent {


  displayedColumns: string[] = ['actualTags','unusedTags'];

  allTags!: Tag[];

  unusedTags: Tag[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public actualTags: Tag[],
              private tagService: TagService
  ) {
    tagService.getTags().subscribe(({tags}) => {
      this.allTags = tags
      this.allTags.forEach(tag => {
        const unusedTag = actualTags.find((actualTag) => actualTag.tagName === tag.tagName)
        if(!unusedTag){
          this.unusedTags.push(tag);
        }
      })
    })
    
  }

}
