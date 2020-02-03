$j = jQuery.noConflict();

getTest();

var test = {
    "trips" : [
        {
            "Id": 1,
            "Name": "DGTE to Bayawan",
            "Businfo": {
                "Busnumber" : {
                    "4:00 am" : "1332",
                    "5:30 am" : "1221",
                    "8:00 am" : "1086",
                    "12:45 pm" : "1002",
                    "4:30 pm" : "1099",
                    "8:00 pm" : "1123"
                },
                "Bustype" : "Bus Type: Air Conditioned"
            },
            "Userinfo": {
                    "4:00 am":{
                        "Driver" : "R.A. Valencia",
                        "Age" : "29"
                    },
                    "5:30 am":{
                        "Driver" : "W. Nocete",
                        "Age" : "28"
                    },
                    "8:00 am":{
                        "Driver" : "J. Guinit",
                        "Age" : "33"
                    },
                    "12:45 pm":{
                        "Driver" : "J. Napigkit",
                        "Age" : "30"
                    },
                    "4:30 pm":{
                        "Driver" : "P. Napigkit",
                        "Age" : "27"
                    },
                    "8:00 pm":{
                        "Driver" : "J. Nario",
                        "Age" : "35"
                    }
                
            },
            "Schedules": {
                "4:00 am" : "10/50",
                "5:30 am" : "15/50",
                "8:00 am" : "30/50",
                "12:45 pm" : "40/50",
                "4:30 pm" : "15/50",
                "8:00 pm" : "11/50"
            }
        }
    ]

}


var values = {
    "trips": [
        {
            "Id": 1,
            "Name": "DGTE to Bayawan",
            "Businfo": {
                "Busnumber" : "Bus# 0291",
                "Bustype" : "Bus Type: Air Conditioned"
            },
            "Userinfo": {
                "Driver" : "Mr. R.A. Valencia",
                "Age" : "31"
            },
            "Schedules": {
                "4:00 am" : "10/50",
                "5:30 am" : "15/50",
                "8:00 am" : "30/50",
                "12:45 pm" : "40/50",
                "4:30 pm" : "15/50",
                "8:00 pm" : "11/50"
            }
        },
        {
            "Id": 2,
            "Name": "DGTE to San Carlos",
            "Businfo": {
                "Busnumber" : "Bus# 0233",
                "Bustype" : "Bus Type: Air Conditioned"
            },
            "Userinfo": {
                "Driver" : "",
                "Age" : ""
            },
            "Schedules": {
                "4:30 am" : "10/50",
                "7:00 am" : "21/50",
                "10:15 pm" : "43/50",
                "3:30 pm" : "2/50",
                "7:00 pm" : "17/50"
            }
        },
        {
            "Id": 3,
            "Name": "DGTE to Bacolod",
            "Businfo": {
                "Busnumber" : "Bus# 0324",
                "Bustype" : "Bus Type: Air Conditioned"
            },
            "Userinfo": {
                "Driver" : "",
                "Age" : ""
            },
            "Schedules": {
                "3:30 am" : "10/50",
                "5:30 am" : "15/50",
                "7:00 am" : "30/50",
                "11:45 am" : "40/50",
                "2:30 pm" : "15/50",
                "5:00 pm" : "11/50"
            }
        },
        {
            "Id": 4,
            "Name": "DGTE to Iloilo",
            "Businfo": {
                "Busnumber" : "Bus# 1422",
                "Bustype" : "Bus Type: Air Conditioned"
            },
            "Userinfo": {
                "Driver" : "",
                "Age" : ""
            },
            "Schedules": {
                "5:30 am" : "17/50",
                "7:30 am" : "15/50",
            }
        },
        {
            "Id": 5,
            "Name": "DGTE to Cebu",
            "Businfo": {
                "Busnumber" : "Bus# 1571",
                "Bustype" : "Bus Type: Air Conditioned"
            },
            "Userinfo": {
                "Driver" : "",
                "Age" : ""
            },
            "Schedules": {
                "5:00 am" : "16/50",
                "7:30 am" : "28/50",
                "1:30 pm" : "50/50",
                "5:00 pm" : "48/50"
            }
        },
        {
            "Id": 6,
            "Name": "DGTE to Zamboanga",
            "Businfo": {
                "Busnumber" : "Bus# 1609",
                "Bustype" : "Bus Type: Air Conditioned"
            },
            "Userinfo": {
                "Driver" : "",
                "Age" : ""
            },
            "Schedules": {
                "5:00 am" : "38/50",
                "6:30 am" : "15/50"          
            }
        },
        {
            "Id": 7,
            "Name": "DGTE to Manila",
            "Businfo": {
                "Busnumber" : "Bus# 0722",
                "Bustype" : "Bus Type: Air Conditioned"
            },
            "Userinfo": {
                "Driver" : "",
                "Age" : ""
            },
            "Schedules": {
                "4:45 am" : "10/50"          
            }
        }
    ]
};



$j(function () {
    getTrips();

        
    $j(".select-sched").on("change",function(){
        $j(".seats-available").html($j(this).val());
     });;

});



function changePage(id) {

    let container = $j(".schedules #sched"+id);

    $j(':mobile-pagecontainer').pagecontainer('change', container);
}

function getTest(){

    $j.ajax({
        type: 'POST',
        data:{ test: "test" }, 
        cache:false,
        url: 'http://localhost/eBusAdmin/admin/getTest',
        success: function(jsondata){
            console.log(jsondata);
        }
     });

}



function getTrips() {
    // $j.ajax({
    //     type: 'POST',
    //     crossDomain: true,
    //     async: false,
    //     jsonpCallback: 'callback',
    //     contentType: "application/json",
    //     // dataType: 'jsonp',
    //     url: 'http://localhost/ezbus/trips.json',
    //     success: function(jsondata){
    //         console.log(jsondata);
    //     }
    //  })

    // $j.getJSON('http://localhost/ezbus/trips.json', function(jd) {
    //     $('#stage').html('<p> Name: ' + jd.name + '</p>');
    //     $('#stage').append('<p>Age : ' + jd.age+ '</p>');
    //     $('#stage').append('<p> Sex: ' + jd.sex+ '</p>');
    //  });


    $j.each(values.trips, function (i , val) {

        //console.log(val.Userinfo.Age);
        //console.log(val.Userinfo.Driver);

        let option = '<option>Select Schedules</option>';     

        $j.each(val.Schedules,function(key,value){
            option += `<option id=time"${ val.Id }" value="${ value }">${ key }</option>`;
        });   

        $j("#trips").append(`<tr>
            <td>${ val.Name }</td>
            <td>
                <a href="#" data-role="button" onclick="changePage(${ val.Id })"
                    class="ui-shadow ui-btn ui-corner-all ui-btn-icon-left ui-icon-grid ui-btn-b">Schedules</a>
            </td>
            </tr>
        `);

        $j(".schedules").append(`
        <div data-role="page" id="sched${ val.Id }" data-theme="d" class="sched${ val.Id }">

            <input type="hidden" name="Bustype" value="${ val.Businfo.Bustype }">
            <input type="hidden" name="Busnumber" value="${ val.Businfo.Busnumber }">
            <input type="hidden" name="Driver" value="${ val.Userinfo.Driver}">
            <input type="hidden" name="Age" value="${ val.Userinfo.Age}">
            <input type="hidden" name="Bound" value="${ val.Name }">

		<div data-role="header" data-position="fixed">
			<a href="#home" data-direction="reverse"
				class="ui-btn ui-shadow ui-corner-all ui-icon-arrow-l ui-btn-icon-notext ui-btn-b">Back</a>
			<h1>Schedule</h1>
		</div>

		<div class="ui-content">
			<form>
				<table>
					<tr>
						<td>Place</td>
						<td>Time</td>
					</tr>
					<tr>
						<td>${ val.Name } &nbsp;&nbsp;&nbsp;&nbsp;<span class='seats-available'></span></td>
						<td>
							<select class="select-sched"  name="dbsched" id="db" data-mini="true">
								       ${ option }	    
							</select>
						</td>
					</tr>
				</table>
			</form>
			<a href="#book" class="ui-btn book" tripId="${ val.Id }">Book Now</a>
		</div>
	</div>    
        `);
    });
   
    //controls
    
    $j("a.book").click(function(){
        let tripId = $j(this).attr('tripId');
        let hiddenfields = $j('.sched'+tripId).find('input[type=hidden]');


        let busType = $j(".sched"+tripId+" input[name=Bustype]").val();
        let busNumber = $j(".sched"+tripId+" input[name=Busnumber]").val();
        let driver = $j(".sched"+tripId+" input[name=Driver]").val();
        let age = $j(".sched"+tripId+" input[name=Age]").val();
        let bound = $j(".sched"+tripId+" input[name=Bound]").val();

        let selectedTime = $j(".sched"+tripId+" .select-sched option:selected").text();

        //console.log(selectedTime);

        $j(".reserve-bustype").html(busType);
        $j(".reserve-busnumber").html(busNumber);
        $j(".reserve-driver").html(driver);
        $j(".reserve-driverage").html(age);
        $j(".reserve-bound").html(bound);
        $j(".reserve-time").html(selectedTime);
        

        // $j.each(hiddenfields,function(key,value){
        //     let val = $j(value).val();

        //     console.log(val);
        // });


    });

    // $j("a.book").on("click","body",function(){
    //     alert("The book botton was clicked.");
    // });


}
