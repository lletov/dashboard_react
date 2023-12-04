export const steps = [
    {
        number: 1,
        title: "Data parsing",
        text: "The following values were taken for every city building from the sourse: address, year of building's construction, flats number, enterances number, height of building in floors, overall building living square, coordinates of building i. e. latitude and longitude. Theese data were compiled in csv file. Samples of csv files are in data folder of this project repositoty."
    }, {
        number: 2,
        title: "Statistic analysis",
        text: "Visualization of trends and buildings construction dynamic, based on the parsed data, some new columns were added in CSV and saved after. Some pictures are in project repository pictures folder, all picures will be added soon."
    }, {
        number: 3,
        title: "Geo analysis",
        text: "Based on the parsed data, heatmaps by year of construction and by buildings height were created for every city. The html versions of them are in heatmaps folder of this project repository. Folium library were used to heatmap creating."
    }, {
        number: 4,
        title: "Summary statistic",
        text: "Summary statistic graphs were created to show mutual dependences of trends and features between cities under consideration. Final graphs are in summary_statistics.ipynb file. in project repository"
    }
]