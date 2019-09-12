export default class Song {
    constructor({ id, competitionName, competitionSite, competitionStartDate, competitionEndDate }) {
        this.id = id;
        this.competitionName = competitionName;
        this.competitionSite = competitionSite;
        this.competitionStartDate = competitionStartDate;
        this.competitionEndDate = competitionEndDate;

    }


}

export function createRace(raceData) {
    return new Song({
        competitionName: raceData.competitionName,
        competitionSite: raceData.competitionSite,
        competitionStartDate: raceData.competitionStartDate,
        competitionEndDate: raceData.competitionEndDate,

    })
}