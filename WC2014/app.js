"use strict";

$(document).ready(function() {

  $.getJSON("http://worldcup.sfg.io/matches/today", function(teams) {

    var PlayingTeams = teams;
    var template = ["<div><table style='width:100%'; class='table table-hover';><thead><tr><th>Match Number</th><th>Location</th><th>Start Time</th><th>Status</th><th>Home Team</th><th>Away Team</th><th>Result</th></tr></thead><tbody>"];

    PlayingTeams.forEach(function(item) {

      var date = item.datetime.slice(11, 16);

      var TableRow = ["<tr>",
                      "<td>",
                      item.match_number,
                      "</td>",
                      "<td>",
                      item.location,
                      "</td>",
                      "<td>",
                      date,
                      "</td>",
                      "<td>",
                      item.status,
                      "</td>",
                      "<td>",
                      item.home_team.country,
                      "</td>",
                      "<td>",
                      item.home_team.goals,
                      ":",
                      item.away_team.goals,
                      "</td>",
                      "<td>",
                      item.away_team.country,
                      "</td>",
                      "</tr>"];

      template.push(TableRow.join(""));
    });

    template.push("</tbody></table></div>");
    $("#today-matches").append(template.join(""));

  });

  $.getJSON("http://worldcup.sfg.io/matches/", function(teams) {

    var PlayedTeams = teams;

    var templateCompleted = ["<div><table style='width:100%'; class='table table-hover';><thead><tr><th>Match Number</th><th>Location</th><th>Played</th><th>Status</th><th>Home Team</th><th>Away Team</th><th>Result</th></tr></thead><tbody>"];

    var templateFuture = ["<div><table style='width:100%'; class='table table-hover';><thead><tr><th>Match Number</th><th>Location</th><th>Date</th><th>Start Time</th><th>Status</th><th>Home Team</th><th>Away Team</th><th>Result</th></tr></thead><tbody>"];

    PlayedTeams.forEach(function(item) {

      if(item.status === "completed"){
        var dateCompleted = item.datetime.slice(0, 10);
        var TableRowCompleted = ["<tr>",
                        "<td>",
                        item.match_number,
                        "</td>",
                        "<td>",
                        item.location,
                        "</td>",
                        "<td>",
                        dateCompleted,
                        "</td>",
                        "<td>",
                        item.status,
                        "</td>",
                        "<td>",
                        item.home_team.country,
                        "</td>",
                        "<td>",
                        item.home_team.goals,
                        ":",
                        item.away_team.goals,
                        "</td>",
                        "<td>",
                        item.away_team.country,
                        "</td>",
                        "</tr>"];

        templateCompleted.push(TableRowCompleted.join(""));
      }

      else if (item.status !== "complited" && item.status !== "in progress") {
        var StartTime = item.datetime.slice(11, 16);
        var StartDate = item.datetime.slice(0, 10);

        var TableRowFuture = ["<tr>",
                        "<td>",
                        item.match_number,
                        "</td>",
                        "<td>",
                        item.location,
                        "</td>",
                        "<td>",
                        StartDate,
                        "</td>",
                        "<td>",
                        StartTime,
                        "</td>",
                        "<td>",
                        item.status,
                        "</td>",
                        "<td>",
                        item.home_team.country,
                        "</td>",
                        "<td>",
                        item.home_team.goals,
                        ":",
                        item.away_team.goals,
                        "</td>",
                        "<td>",
                        item.away_team.country,
                        "</td>",
                        "</tr>"];

        templateFuture.push(TableRowFuture.join(""));
        }
    });

    templateCompleted.push("</tbody></table></div>");
    $("#past-matches").append(templateCompleted.join(""));

    templateFuture.push("</tbody></table></div>");
    $("#future-matches").append(templateFuture.join(""));

  });
});
