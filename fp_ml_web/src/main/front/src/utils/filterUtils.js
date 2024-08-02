export const transformFilterData = (filterData) => {
  return {
    userId: parseInt(localStorage.getItem('userId')),
    service_industry_name: filterData.selectedBusinessTypes.map(type => type.name),
    business_district_name: filterData.selectedRegions.map(region => region.name),
    rent_fee_select: {
      min: filterData.rentMin ? parseInt(filterData.rentMin) * 10000 : 0,
      max: filterData.rentMax ? parseInt(filterData.rentMax) * 10000 : null
    },
    rent_area: {
      min: filterData.areaMin ? parseInt(filterData.areaMin) : 0,
      max: filterData.areaMax ? parseInt(filterData.areaMax) : null
    }
  };
};