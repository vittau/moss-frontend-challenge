/**
 * Transforms the URL of a thumbnail of size 170px into a different size. Also changes from PNG to JPG.
 * @param param.imageURL original URL of the thumbnail
 * @param param.size new size
 * @returns new URL with the given sizen
 */
export const thumbnailTransform = ({ imageURL, size = 256 }: { imageURL: string; size?: number }) => imageURL.replace('170x170bb.png', `${size}x${size}bb.jpg`);
