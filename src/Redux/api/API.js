const baseUrl = 'https://api.spacexdata.com/v3/';

const API = {
  fetchMissions: async () => {
    const response = await fetch(`${baseUrl}missions`);
    const data = await response.json();
    const missions = data.map(
      ({
        mission_id: missionId,
        mission_name: missionName,
        description,
      }) => ({
        missionId,
        missionName,
        description,
      }),
    );
    return missions;
  },

  fetchRockets: async () => {
    const response = await fetch(`${baseUrl}rockets`);
    const data = await response.json();
    const rockets = data.map(
      ({
        rocket_id: rocketId,
        rocket_name: rocketName,
        description: rocketType,
        flickr_images: rocketImages,
      }) => {
        const rocketImage = rocketImages[0];
        return {
          rocketId,
          rocketName,
          rocketType,
          rocketImage,
        };
      },
    );
    return rockets;
  },
};

export default API;
