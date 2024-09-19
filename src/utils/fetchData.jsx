
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key':'04f971fa87msh9f8d9a07f315fafp101020jsne0790d80ad02',
      'x-rapidapi-host':'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '04f971fa87msh9f8d9a07f315fafp101020jsne0790d80ad02',
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async(url,options) => {
const response = await fetch(url,options);
const data = await response.json();

return data;
};

