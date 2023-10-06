// 2023-06-13T17:26:23.000Z
const IsoDateTimeRegExp = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/

const currentDateTime = () => new Date().toISOString()

const isDraft = () => {
  return {
    $or: [
      { _draft: true },
      { draft: true },
      { published_at: { $ne: IsoDateTimeRegExp } },
    ]
  }
}

const isNotDraft = () => {
  return {
    _draft: { $ne: true },
    draft: { $ne: true },
    published_at: { $exists: true }
  }
}

const containsTag = (tag: string) => {
  return {
    tags: { $icontains: tag }
  }
}

const inDir = (dir: string[]) => {
  return {
    _dir: { $in: dir }
  }
}

const existsTags = () => {
  return {
    tags: { $exists: true }
  }
}

const existsPublishedAt = () => {
  return {
    published_at: { $exists: true }
  }
}

const excludeIndex = (slug: string) => {
  return {
    slug: { $ne: slug },
    _file: { $not: { $contains: 'index' } }
  }
}

export {
  isDraft,
  isNotDraft,
  containsTag,
  inDir,
  existsTags,
  existsPublishedAt,
  excludeIndex,
}
