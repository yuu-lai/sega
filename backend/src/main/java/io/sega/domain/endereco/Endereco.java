package io.sega.domain.endereco;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.sega.core.entity.AbstractEntity;
import io.sega.domain.garagem.Garagem;
import io.sega.domain.pais.Pais;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "endereco")
@Getter @Setter
public class Endereco extends AbstractEntity {

	private static final long serialVersionUID = 1L;

	@NotEmpty
	@Size(max = 80)
	@Column(name = "logradouro", nullable = false)
	private String logradouro;

	@Size(max = 30)
	@Column(name = "complemento")
	private String complemento;

	@Size(max = 30)
	@Column(name = "bairro")
	private String bairro;

	@Size(max = 80)
	@Column(name = "cidade")
	private String cidade;

	@Size(max = 30)
	@Column(name = "estado")
	private String estado;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name = "pais_id", referencedColumnName = "id")
	private Pais pais;
	
	@JsonIgnore
	@OneToOne(mappedBy = "endereco")
	private Garagem garagem;

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Pais getPais() {
        return pais;
    }

    public void setPais(Pais pais) {
        this.pais = pais;
    }

    public Garagem getGaragem() {
        return garagem;
    }

    public void setGaragem(Garagem garagem) {
        this.garagem = garagem;
    }

}
