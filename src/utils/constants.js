export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_API_TOKEN
    }
  };


  export const IMGAE_CDN = "https://image.tmdb.org/t/p/w200/";
  export const IMAGE_BACKGROUND = "https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_small.jpg"

  export const SUPPORTED_LANGUAGES = [{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"},{identifier:"spanish",name:"Spanish"}];

  export const OPENAI_KEY = process.env.REACT_APP_OPEN_API_KEY;