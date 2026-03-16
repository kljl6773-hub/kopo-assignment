const jsonUrl =
  "https://prof-jwchi.github.io/kopo-front2026/Json/baseball.json";

fetch(jsonUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.table(data.list);

    const tbody = document.querySelector("tbody");
    let html = "";

    data.list.forEach((team) => {
      html += `
            <tr>
                <td class="td_rank">${team.rank.rank}</td>
                <td class="td_name"><img src="${team.imageUrl}" width="20"> ${team.shortName} ></td>
                <td>${team.rank.game}</td>
                <td>${team.rank.win}</td>
                <td>${team.rank.draw}</td>
                <td>${team.rank.loss}</td>
                <td class="td_wpct">${team.rank.wpct}</td>
                <td>${team.rank.gb}</td>
                <td>${team.rank.streak}</td>
              </tr>
            `;
    });
    tbody.innerHTML = html;
  })
  .catch((error) => {
    console.error("파일 못가져옴", error);
  });
