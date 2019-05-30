package io.sega.domain.garagem;


import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import io.sega.core.entity.AbstractEntity;
import io.sega.domain.carro.Carro;
import io.sega.domain.endereco.Endereco;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "garagem")
@Getter @Setter
public class Garagem extends AbstractEntity {

	private static final long serialVersionUID = 1L;

	@NotEmpty @NotBlank
	@Size(max = 80)
	@Column(name = "nome", nullable = false)
	private String nome;

	@Valid
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "endereco_id", referencedColumnName = "id")
	private Endereco endereco;

	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "garagem")
	private List<Carro> carros;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    public List<Carro> getCarros() {
        return carros;
    }

    public void setCarros(List<Carro> carros) {
        this.carros = carros;
    }

}
