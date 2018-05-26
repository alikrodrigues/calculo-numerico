export class ConversaoService{

  binarioToDecimal(number): string{
    return parseInt(number,2).toString(10);
  }

  binarioToHexa(number): string{
    return parseInt(number,2).toString(16);
  }

  binarioToOctal(number): string{
    return parseInt(number,2).toString(8);
  }

  octalToDecimal(number): string{
    return parseInt(number,8).toString(10);
  }

  octalToHexa(number): string{
    return parseInt(number,8).toString(16);
  }

  octalToBinario(number): string{
    return parseInt(number,8).toString(2);
  }

  decimalToBinario(number): string{
    return parseInt(number,10).toString(2);
  }

  decimalToHexa(number): string{
    return parseInt(number,10).toString(16);
  }

  decimalToOctal(number): string{
    return parseInt(number,10).toString(8);
  }

  hexadecimalToBinario(number): string{
    return parseInt(number,16).toString(2);
  }

  hexadecimalToDecimal(number): string{
    return parseInt(number,16).toString(10);
  }

  hexadecimalToOctal(number): string{
    return parseInt(number,16).toString(8);
  }

}
