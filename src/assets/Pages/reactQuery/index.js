import { useQuery } from '@tanstack/react-query';
import { getImages , getImagesById } from '../../../api';

export const useImages = () =>{
    const { data, isLoading } =useQuery([],getImages);
    return { data , isLoading };
};

export const useImagesById = (imageId) =>{
    const { data, isLoading } =useQuery([imageId],getImagesById);
    return { data , isLoading };
};