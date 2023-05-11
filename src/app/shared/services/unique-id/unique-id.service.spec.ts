import { UniqueIdService } from "./unique-id.service";


describe(UniqueIdService.name, () => {

  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  })

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should generate ID when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set(); //Set() não aceita elementos duplicados, apenas
    for (let i = 0; i < 100; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(100);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedIds.name}
    should return the number of generated IDs when called`, () => {
    service.generateUniqueIdWithPrefix('app')
    service.generateUniqueIdWithPrefix('app')
    expect(service.getNumberOfGeneratedIds()).toBe(2)
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
  should throw when called with empty`, () => {
    const emptyValues = [null, undefined, '', '0', 'app'];
    emptyValues.forEach(emptyValue => {
      // teste de exception precisa estar encapsulado por uma função
      expect(() => service.generateUniqueIdWithPrefix(emptyValue))
      .withContext(`Empty value: * ${emptyValue} *`) //caso falhe, anuncia qual o valor que causou a falha
      .toThrow();
    })
  });

  // it('N-ésima condição que queremos testar', () => {
  //  ...teste
  // });


});

