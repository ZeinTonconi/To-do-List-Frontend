

export interface Tag {
    id: string,
    tagName: string,
    id_user: string
  }

export interface Tags{
    categories: Tag[]
}

export interface TagResponse{
    msg: string,
    tag: Tag
}

export interface TagErrorResponse{
    msg: string
}
