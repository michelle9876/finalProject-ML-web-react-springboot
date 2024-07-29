public class CommercialArea {
    private String commercialAreaName;
    private Double latitude;
    private Double longitude;
    private int rank;

    // Constructor
    public CommercialArea(String commercialAreaName, Double latitude, Double longitude, int rank) {
        this.commercialAreaName = commercialAreaName;
        this.latitude = latitude;
        this.longitude = longitude;
        this.rank = rank;
    }

    // Getters and Setters
    public String getCommercialAreaName() {
        return commercialAreaName;
    }

    public void setCommercialAreaName(String commercialAreaName) {
        this.commercialAreaName = commercialAreaName;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }
}
