import Http from '../utils/Http';

export const getTagsRightsiderBar = () => {
  return new Http().get(`tags/tagsRightSiderBar`);
};
