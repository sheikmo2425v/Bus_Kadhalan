$(document).ready(function () {
	$("#toggleOffcanvas").click(function () {
		$("#offcanvas").toggleClass("show");
	});


	$("#offcanvas [data-bs-dismiss='offcanvas']").click(function () {
		$("#offcanvas").removeClass("show");
	});
	$("#searchBtn").click(function () {
        var searchTerm = $("#searchInput").val().toLowerCase();

        
        $("#modContainer .card").each(function () {
            var cardText = $(this).text().toLowerCase();

            if (cardText.indexOf(searchTerm) > -1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
	$('.card-details-btn').on('click', function () {
        var cardId = $(this).data('card-id');
        
    
        $.ajax({
            url: '/card_details/' + cardId,
            type: 'GET',
            success: function (data) {
                
                window.location.href = '/card_details_page?name=' + data.name + '&description=' + data.description;
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
});