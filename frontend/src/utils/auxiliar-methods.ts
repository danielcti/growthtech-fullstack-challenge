export function getLectureTime(text: string): string {
  const wordsPerMinute = 200; // Média

  const textLength = text.split(" ").length; // Dividir por palavras
  const value = Math.ceil(textLength / wordsPerMinute);

  return `~${value} min de leitura`;
}

const meses = [
  "JANEIRO",
  "FEVEREIRO",
  "MARÇO",
  "ABRIL",
  "MAIO",
  "JUNHO",
  "JULHO",
  "AGOSTO",
  "SETEMBRO",
  "OUTUBRO",
  "NOVEMBRO",
  "DEZEMBRO",
];

export function getRandomDate(): string {
  const startDate = new Date(2019, 0, 1);
  const date = new Date(
    startDate.getTime() +
      Math.random() * (new Date().getTime() - startDate.getTime())
  );

  const day = date.getDay() + 1;
  const month = meses[date.getMonth()];
  const year = date.getFullYear();

  return `${day} de ${month}, ${year}`;
}
