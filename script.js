class Spell {
    constructor(name, explanation) {
        this.name = name
        this.explanation = explanation
    }
}





const accio = new Spell('Accio', 'to call an object to you')
const aguamenti = new Spell('Aguamenti', ' Produces a clean, drinkable jet of water from the wand tip')
const alohomora = new Spell('Alohomora', 'to open locked windows and doors')
const ascendio = new Spell('Ascendio', 'Lifts the caster high into the air')
const bombarda = new Spell('Bombarda', 'Provokes a small explosion')
const engorgio = new Spell('Engorgio', 'Causes rapid growth in the targeted object')
const episkey = new Spell('Episkey', 'Heals minor injuries')
const expectoPatronum = new Spell('Expecto patronum', 'to summon up a Patronus')
const finiteIncantatem = new Spell('Finite Incantatem', 'A general counter-spell thats used to reverse or counter already cast charms')
const immobulus = new Spell('Immobulus', 'Immobilises living targets')
const incendio = new Spell('Incendio', 'Conjures flames')
const legilimens = new Spell('Legilimens', 'Invading or navigating anothers mind')
const levicorpus = new Spell('Levicorpus', 'Levitates the target by their ankle')
const lumos = new Spell('Lumos', 'to ignite ones wand-tip to provide light')
const nox = new Spell('Nox', 'Reverses the lumos charm, extinguishing a wands light')
const obliviate = new Spell('Obliviate', 'to make the subject forget')
const oculusReparo = new Spell('Oculus Reparo', 'Repairs eyeglasses')
const petrificusTotalus = new Spell('Petrificus Totalus', 'Temporarily freezes or petrifies the body of the target')
const protego = new Spell('Protego', 'Casts an invisible shield around the caster, protecting against spells and objects')
const riddikulus = new Spell('Riddikulus', 'to make a Boggart take on a comical appearance and eventually explode ')
const tarantallegra = new Spell('Tarantallegra', 'Aimed at the legs, causes uncontrollable dancing movement')
const serpensortia = new Spell('Serpensortia', 'Conjures a live snake')
const wingardiumLeviosa = new Spell('Wingardium Leviosa', 'to levitate an object')


spells = [
    accio,
    aguamenti,
    alohomora,
    ascendio,
    bombarda,
    engorgio,
    episkey,
    expectoPatronum,
    finiteIncantatem,
    immobulus,
    incendio,
    legilimens,
    levicorpus,
    lumos,
    nox,
    obliviate,
    oculusReparo,
    petrificusTotalus,
    protego,
    riddikulus,
    tarantallegra,
    serpensortia,
    wingardiumLeviosa
]



let randomNumber = Math.floor(Math.random() * spells.length)

console.log(spells[randomNumber].name)
console.log(spells[randomNumber].explanation)
